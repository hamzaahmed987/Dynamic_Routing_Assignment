import Image from "next/image";
// import styles from "./page.module.css";
import "./globals.css"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Countries List</h2>
      <h3>Click on any country button to show its data: </h3>
      <ul className="d-flex">
            <li className="cust_button"><Link className="" href="./country/pakistan">Pakistan</Link></li>
            <li className="cust_button"><Link className="" href="./country/india">India</Link></li>
            <li className="cust_button"><Link className="" href="./country/afghanistan">Afganistan</Link></li>
            <li className="cust_button"><Link className="" href="./country/china">China</Link></li>
            <li className="cust_button"><Link className="" href="./country/japan">Japan</Link></li>
        </ul>
    </div>
  );
}