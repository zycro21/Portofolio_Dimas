import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 🟢 Handle GET: Ambil semua proyek
  if (req.method === "GET") {
    try {
      const projects = await prisma.project.findMany();
      return res.status(200).json(projects);
    } catch (error) {
      return res.status(500).json({ error: "Gagal mengambil data proyek" });
    }
  }

  // 🟢 Handle POST: Tambah proyek baru
  if (req.method === "POST") {
    const { title, description, image_url, github_url, live_url } = req.body;

    // ❗ Cek apakah title sudah ada
    const existingProject = await prisma.project.findFirst({
      where: { title },
    });

    if (existingProject) {
      return res.status(400).json({ error: "Judul proyek sudah digunakan" });
    }

    // ❗ Berikan nilai default jika kosong
    const newProject = {
      title,
      description: description || "No description provided",
      image_url: image_url || "https://via.placeholder.com/150",
      github_url: github_url || "https://github.com/",
      live_url: live_url || "https://example.com",
    };

    try {
      const createdProject = await prisma.project.create({
        data: newProject,
      });

      return res.status(201).json(createdProject);
    } catch (error) {
      return res.status(500).json({ error: "Gagal menambahkan proyek" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
