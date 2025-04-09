import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  // Validasi id
  if (!id || Array.isArray(id) || isNaN(Number(id))) {
    return res.status(400).json({ error: "ID tidak valid" });
  }

  const numericId = Number(id);

  if (req.method === "GET") {
    try {
      const project = await prisma.project.findUnique({
        where: { id: numericId },
      });

      if (!project) {
        return res.status(404).json({ error: "Proyek tidak ditemukan" });
      }

      return res.status(200).json(project);
    } catch (error) {
      console.error(error); // 👈 agar tidak dianggap "unused"
      return res.status(500).json({ error: "Gagal mengambil proyek" });
    }
  }

  if (req.method === "PUT") {
    const { title, description, image_url, github_url, live_url } = req.body;

    try {
      // ❗ Cek apakah project dengan ID tersebut ada
      const existingProject = await prisma.project.findUnique({
        where: { id: numericId },
      });

      if (!existingProject) {
        return res.status(404).json({ error: "Proyek tidak ditemukan" });
      }

      // ❗ Cek apakah title sudah dipakai oleh project lain
      if (title && title !== existingProject.title) {
        const duplicate = await prisma.project.findFirst({
          where: { title },
        });
        if (duplicate) {
          return res
            .status(400)
            .json({ error: "Judul proyek sudah digunakan" });
        }
      }

      // ❗ Update dengan fallback default jika kosong
      const updatedProject = await prisma.project.update({
        where: { id: numericId },
        data: {
          title: title || existingProject.title,
          description: description ?? existingProject.description,
          image_url: image_url ?? existingProject.image_url,
          github_url: github_url ?? existingProject.github_url,
          live_url: live_url ?? existingProject.live_url,
        },
      });

      return res.status(200).json(updatedProject);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Gagal mengupdate proyek" });
    }
  }

  if (req.method === "DELETE") {
    try {
      // ❗ Pastikan project ada sebelum dihapus
      const existingProject = await prisma.project.findUnique({
        where: { id: numericId },
      });

      if (!existingProject) {
        return res.status(404).json({ error: "Proyek tidak ditemukan" });
      }

      await prisma.project.delete({
        where: { id: numericId },
      });

      return res.status(200).json({ message: "Proyek berhasil dihapus" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Gagal menghapus proyek" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
