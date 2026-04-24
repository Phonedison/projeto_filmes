import tmdb from "../assets/tmdb.svg";

export function Footer() {
  return (
    <>
      <div className="footer__container">
        <div></div>
        <div></div>
        <div></div>
        <div className="footer__logotipo">
          <img src={tmdb} alt="logotipo tmdb" />
        </div>
      </div>
    </>
  );
}
