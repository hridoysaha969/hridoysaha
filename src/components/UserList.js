/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/userList.module.css";
import { MdArrowUpward, MdDelete, MdEdit, MdSearch } from "react-icons/md";

const UserList = () => {
  return (
    <div className={styles.container}>
      <div>
        <main className={`${styles.main} ${styles.table}`} id="customers_table">
          <section className={styles.table__header}>
            <h1>All Users</h1>
            <div className={styles.input__group}>
              <input type="search" placeholder="Search Data..." />
              <MdSearch />
            </div>

            <div className={styles.export__file}>
              <label
                htmlFor="export-file"
                className={styles.export__file_btn}
                title="Export File"
              ></label>
              <input type="checkbox" id="export-file" />
              <div className={styles.export__file__options}>
                <label>Export As &nbsp; &#10140;</label>
                <label htmlFor="export-file" id="toPDF">
                  PDF
                </label>
                <label htmlFor="export-file" id="toJSON">
                  JSON
                </label>
                <label htmlFor="export-file" id="toCSV">
                  CSV
                </label>
                <label htmlFor="export-file" id="toEXCEL">
                  EXCEL
                </label>
              </div>
            </div>
          </section>
          <section className={styles.table__body}>
            <table className={styles.custom_table}>
              <thead>
                <tr>
                  <th>
                    <span className={styles.row}>
                      S. No. <MdArrowUpward />
                    </span>
                  </th>
                  <th>
                    <span className={styles.row}>
                      Name <MdArrowUpward />
                    </span>
                  </th>
                  <th>
                    <span className={styles.row}>
                      Email <MdArrowUpward />
                    </span>
                  </th>
                  <th>
                    <span className={styles.row}>
                      Join Date <MdArrowUpward />
                    </span>
                  </th>
                  <th>
                    <span className={styles.row}>
                      Action <MdArrowUpward />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 1 </td>
                  <td>
                    {" "}
                    <img src="/hridoy-saha.jpg" alt="" />
                    Zinzu Chan Lee
                  </td>
                  <td> Seoul </td>
                  <td> 17 Dec, 2022 </td>
                  <td>
                    <p className="status delivered">Delivered</p>
                  </td>
                </tr>
                <tr>
                  <td> 2 </td>
                  <td>
                    <img src="/hridoy-saha.jpg" alt="" /> Jeet Saru{" "}
                  </td>
                  <td> Kathmandu </td>
                  <td> 27 Aug, 2023 </td>
                  <td>
                    <p className="status cancelled">Cancelled</p>
                  </td>
                </tr>
                <tr>
                  <td> 3</td>
                  <td>
                    <img src="/hridoy-saha.jpg" alt="" /> Sonal Gharti{" "}
                  </td>
                  <td> Tokyo </td>
                  <td> 14 Mar, 2023 </td>
                  <td>
                    <p className="status shipped">Shipped</p>
                  </td>
                </tr>
                <tr>
                  <td> 4</td>
                  <td>
                    <img src="/hridoy-saha.jpg" alt="" /> Alson GC{" "}
                  </td>
                  <td> New Delhi </td>
                  <td> 25 May, 2023 </td>
                  <td>
                    <p className="status delivered">Delivered</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserList;
