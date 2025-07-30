import Link from "next/link";

const MenuItem = ({ item }: { item: { title: string; href: string } }) => {
  return (
    <li className="hover:bg-main hover:text-white hover:transition-all hover:duration-300 px-3 py-1 rounded-xl select-none cursor-pointer hover:shadow-lg">
      <Link href={item.href}>{item.title}</Link>
    </li>
  );
};
export default MenuItem;
