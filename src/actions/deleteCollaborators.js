import { revalidatePath } from "next/cache";
import { connectToDB } from "@/db/connection";
import { Collaborator } from "@/db/models";

export const deletCollaborator = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Collaborator.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);

    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/collaborators");
};