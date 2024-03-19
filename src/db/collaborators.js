import { connectToDB } from "./connection";
import { Collaborator } from "./models";

export const fetchCollaborators = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();

    const count = await Collaborator.find({ username: { $regex: regex } }).countDocuments();

    const collaborators = await Collaborator.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, collaborators };
  } catch (err) {
    console.log(err);

    throw new Error("Failed to fetch collaborators!");
  }
};