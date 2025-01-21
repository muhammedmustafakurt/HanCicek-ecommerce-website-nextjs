'use server';
import { redirect } from 'next/navigation';
import connectToDB from '../../../db';
import { ObjectId } from 'mongodb';

// Update Product
export async function updateProduct(data: FormData) {
  const slug = data.get('slug') as string;
  const id = data.get('id') as string;
  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const price = parseFloat(data.get('price') as string);
  const image = data.get('image') as string;

  if (!slug || !id || !title || !description || isNaN(price) || !image) {
    throw new Error('Missing or invalid required fields.');
  }

  const db = await connectToDB();
  const collection = db.collection(slug);

  // Debugging
  console.log('Updating Product:', { slug, id, title, description, price, image });

  const existingProduct = await collection.findOne({ _id: new ObjectId(id) });
  if (!existingProduct) {
    throw new Error(`No product found with ID: ${id}`);
  }

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { title, description, price, image } }
  );

  if (result.modifiedCount === 0) {
    throw new Error('Failed to update product.');
  }
  
  return redirect(`/admin/products/${slug}`);
}

// Delete Product
export async function deleteProduct(data: FormData) {
  const slug = data.get('slug') as string;
  const id = data.get('id') as string;

  if (!slug || !id) {
    throw new Error('Missing required fields for product deletion.');
  }

  const db = await connectToDB();
  const collection = db.collection(slug);

  // Debugging
  console.log('Deleting Product:', { slug, id });

  const result = await collection.deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    throw new Error(`Failed to delete product with ID: ${id}`);
  }

  return redirect(`/admin/products/${slug}`);
}
