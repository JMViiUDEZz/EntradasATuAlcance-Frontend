import { NextApiRequest, NextApiResponse } from 'next';
import { ICategory } from '@/interfaces';
import unRegistro from '@/api/unRegistro';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { catid },
    method,
  } = req;

  try {
    const categoryId = catid as string;
    const category: ICategory = await unRegistro(categoryId);

    if (!category) {
      return res.status(404).json({ message: `No se encontró ninguna categoría con el ID: ${categoryId}` });
    }

    if (method === 'GET') {
      return res.status(200).json({ category });
    } else {
      return res.status(405).json({ message: `El método ${method} no está permitido` });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Se produjo un error al obtener la categoría' });
  }
}
