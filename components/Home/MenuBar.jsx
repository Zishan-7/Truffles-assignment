import Image from "next/image";
import DashboardIcon from "../../assets/dashBoard/dashboard.png";
import InvoiceIcon from "../../assets/dashBoard/invoice.png";
import PerformaIcon from "../../assets/dashBoard/performa.png";
import SwapIcon from "../../assets/dashBoard/swap.png";
import TransferIcon from "../../assets/dashBoard/transfer.png";
import ContactsIcon from "../../assets/dashBoard/contacts.png";

const MenuBar = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] px-2 py-3 bg-white rounded-lg flex items-center cursor-pointer">
        <Image src={DashboardIcon} width={35} height={20} alt={"Dashboard"} />
        <p className="text-[#252F40] ml-4">Dashboard</p>
      </div>
      <div className="w-[80%]  px-2 py-3 rounded-md flex items-center">
        <Image src={InvoiceIcon} width={35} height={20} alt={"Invoice"} />
        <p className="text-[#252F40] ml-4"> Invoice</p>
      </div>
      <div className="w-[80%]  px-2 py-3 rounded-md flex items-center">
        <Image src={PerformaIcon} width={35} height={20} alt={"Proforma"} />
        <p className="text-[#252F40] ml-4 line-through">Proforma</p>
      </div>
      <div className="w-[80%] px-2 py-3 rounded-md flex items-center">
        <Image src={SwapIcon} width={35} height={20} alt={"Swap"} />
        <p className="text-[#252F40] ml-4 line-through">Swap</p>
      </div>{" "}
      <div className="w-[80%]  px-2 py-3 rounded-md flex items-center">
        <Image src={TransferIcon} width={35} height={20} alt={"Transfer"} />
        <p className="text-[#252F40] ml-4 line-through">Transfer</p>
      </div>{" "}
      <div className="w-[80%] px-2 py-3 rounded-md flex items-center">
        <Image src={ContactsIcon} width={35} height={20} alt={"Contacts"} />
        <p className="text-[#252F40] ml-4">Contacts</p>
      </div>
    </div>
  );
};

export default MenuBar;
