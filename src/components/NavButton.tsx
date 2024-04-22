export default function NavButton({ title, link }) {
  return (
    <>
      <li className="list-none">
        <a
          className="text-white font-bold text-center no-underline w-[150px] py-[4px] px-0 text-[10px] sm:text-[12px] md:text-[14px] hover:underline"
          href={link}
        >
          {title}
        </a>
      </li>
    </>
  );
}
