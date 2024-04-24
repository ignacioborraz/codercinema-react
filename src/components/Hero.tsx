interface Props {
  first: string;
  second: string;
}

export default function Hero({ first, second }: Props) {
  return (
    <>
      <section className="h-[200px] flex justify-center bg-hero bg-cover bg-center">
        <article className="w-[1024px] flex flex-col items-start justify-center ps-[20px]">
          <span className="text-white font-bold text-[20px]">{first}</span>
          <span className="text-white font-bold text-[50px]">{second}</span>
        </article>
      </section>
    </>
  );
}
