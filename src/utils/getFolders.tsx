import fs from 'fs';
import path from 'path';

export interface FolderItem {
  name: string;
  slug: string;
}

export function getDirectoryFolders(relativeDirectoryPath: string): FolderItem[] {
  const targetDir = path.join(process.cwd(), relativeDirectoryPath);

  // Pastikan direktori ada agar tidak throw error
  if (!fs.existsSync(targetDir)) {
    return [];
  }

  // Baca isi folder dengan opsi withFileTypes: true
  const entries = fs.readdirSync(targetDir, { withFileTypes: true });

  // Filter hanya yang berjenis direktori (folder)
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      name: entry.name,
      // Format slug jika ada spasi / karakter khusus (opsional)
      slug: entry.name.toLowerCase().replace(/\s+/g, '-'),
    }));
}