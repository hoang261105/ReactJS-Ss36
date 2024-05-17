import { useEffect } from "react";

const ScrollComponent = () => {
  const handleScroll = () => {
    document.title = window.scrollY.toString();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quasi
        ullam similique tempore nostrum saepe excepturi dolores iste nihil
        itaque. Eaque incidunt similique ut iusto ad. Ducimus accusantium ab
        assumenda. Culpa voluptatum laborum pariatur, dolorum quam, suscipit at
        officia nobis non harum voluptates in magni distinctio illum natus
        fugiat adipisci alias dicta nostrum voluptas! Perferendis sunt facere
        officiis consectetur ab? Deleniti, harum minus expedita at, quidem
        labore nam odit dolore ab aspernatur, itaque distinctio accusamus
        recusandae et. Laboriosam animi itaque eveniet, eum nulla nisi
        asperiores mollitia expedita temporibus quas nemo. Natus quos at,
        officia eius quibusdam aspernatur, deserunt illo accusamus autem error
        impedit necessitatibus animi provident? Laborum, fugiat ad, corrupti
        dolor ratione quos quidem nemo deserunt ea, voluptates nihil tempore?
        Ducimus, rem. Voluptatum, porro magni esse, saepe et, atque impedit ea
        voluptatibus delectus consequatur voluptate sint fugit? Quidem, dolorum
        quae qui ut iusto nemo. Animi laudantium iure optio quibusdam delectus.
        Dolore, quas odit voluptatem sunt assumenda iure blanditiis, omnis
        ducimus ratione placeat maiores, deleniti accusamus voluptate? Repellat
        sunt, fugiat, incidunt eius illum modi, doloribus tempora odio dicta
        dolorum at tempore. Facere facilis nemo ipsa molestias repellendus iusto
        distinctio nulla ipsum quisquam saepe nostrum soluta labore ullam,
        cupiditate sed veritatis, beatae repudiandae alias architecto
        voluptatibus odio laboriosam quaerat officiis. Nisi, nihil. Itaque ex
        voluptatibus expedita praesentium. Possimus praesentium rerum adipisci
        nobis tempore quibusdam officiis est voluptas perferendis eligendi!
        Accusantium illum at officiis reprehenderit fugit iure nobis deleniti
        recusandae temporibus asperiores. Voluptatem? Illum reprehenderit
        cupiditate id accusamus quae, sapiente, modi est illo dolorem
        voluptatibus ipsam at possimus autem mollitia impedit dolorum minus
        dignissimos earum repellendus tenetur sint quasi quia. Nisi, aut veniam!
        Veniam repudiandae ipsa, doloribus dicta officia voluptatem
        exercitationem numquam deleniti, delectus necessitatibus officiis optio
        cupiditate aut laborum? Nemo quibusdam excepturi iste sint, maiores
        porro eius commodi hic exercitationem omnis quasi?
      </p>
    </>
  );
};

export default ScrollComponent;
