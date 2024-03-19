import React from "react";

import Image from "next/image";
import Link from "next/link";
import Search from "@/components/dashboard/search/search";
import Pagination from "@/components/dashboard/pagination/pagination";
import { fetchCollaborators } from "@/db/collaborators";
import { deleteCollaborator } from "@/actions/deleteCollaborators";
import styles from "../../../components/dashboard/collaborators/collaborators.module.css";

const CollaboratorsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, collaborators } = await fetchCollaborators(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/collaborators/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {collaborators.map((collaborator) => (
            <tr key={collaborator.id}>
              <td>
                <div className={styles.collaborator}>
                  <Image
                    src={collaborator.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.image}
                  />
                  {collaborator.name}
                </div>
              </td>

              <td>{collaborator.email}</td>
              <td>{collaborator.createdAt?.toString().slice(4, 16)}</td>
              <td>{collaborator.isAdmin ? "Admin" : "Client"}</td>
              <td>{collaborator.isActive ? "active" : "passive"}</td>

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/collaborators/${collaborator.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>

                  <form action={deleteCollaborator}>
                    <input type="hidden" name="id" value={(collaborator.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination count={count} />
    </div>
  );
};

export default CollaboratorsPage;