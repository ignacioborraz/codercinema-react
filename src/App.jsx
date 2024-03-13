import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  useEffect(() => {
    axios("http://localhost:8080/api/events")
      //axios("http://coderapi/api/events")
      .then((res) => {
        console.log(res.data.response);
        setProducts(res.data.response.docs);
        setPrev(res.data.response.prevPage);
        setNext(res.data.response.nextPage);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md bg-danger w-100">
        <div className="container-fluid">
          <a className="btn btn-danger fs-5 m-1 me-3" href="/">
            HOME
          </a>
          <button
            className="navbar-toggler bg-light m-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="btn btn-light fs-5 m-1"
                href="/events/form"
                id="formButton"
              >
                Form
              </a>
              <a
                className="btn btn-light fs-5 m-1"
                href="/orders"
                id="ordersButton"
              >
                My cart
              </a>
              <a
                className="btn btn-light fs-5 m-1"
                href="/sessions/register"
                id="registerButton"
              >
                Register
              </a>
              <a
                className="btn btn-light fs-5 m-1"
                href="/sessions/login"
                id="loginButton"
              >
                Login
              </a>
              <span className="btn btn-danger fs-5 m-1" id="signout">
                Sign out
              </span>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow-1 w-100 d-flex flex-column">
        <section id="background">
          <h1 className="title">CODER CINEMA</h1>
          <img id="arrow" src="/arrow.gif" alt="arrow" />
        </section>
        <h2 className="subtitle mt-4 mb-2 text-center">OUR MOVIES</h2>
        <span className="m-auto d-flex justify-content-between align-items-center">
          <input
            id="text"
            type="text"
            style={{ width: "360px" }}
            className="p-2 text-center"
            placeholder="search..."
          />
          <img
            style={{ width: "44px", padding: "2px" }}
            id="search"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABFdJREFUaEPtmWnIlUUUx38m2qYlGJmYJZWlRBJI+CEiTM0PttCOJFGpUaiIgiSZUmqmImUoRqCmFdkepKUGrpQSBX6JJG1R6YOgpeWCii3zl5kYnubeZ859vHRfeA9cXl7umf+Z/8yZs90OtHHp0Mb3TzuB//sGq9zAecCdwL1AP+AS/xGng/6zE/gQ+BQ40QyyjRDoAcwGHgbOz9zUceANYAZwIHNNlpqVwExgCqDTb0RE5EV/AI2s/8+aXALdgbXOFW46K1ZhE3AP8HtVvBwC/f3mr0wYOwR8ArwH/AT84nUuB64B7gfuBrol1u4GhgL7qpAoI9AL+ArQ31h+9q7wOnC6ZAPnAqPdI54K9C7oisQgQAfRkNQjcJE7oS9cFLmhgPw+MAo4ZbR4AfAucEdh3XZgMHDSiHdGvR6BxS5ijCuAzgeebsRQtOZV4MkCxvPu/+cawa1FoI875R+AjhGo4rl8uqqcA3wGDI+AjgFXAL9ZwWsReBsYGYH96B+lFb+WvtxTmEp+QV4GJlsNpAgoOR0GOkdg9wEfWcFL9J8ClkQ6yt6XAn9b7KQIPOgfW8D5DrjeAmrQVVaOb+EWHziyIVIE3vJlQgCZ5UuAbFCD4jKXBx6P9M1BIkXgG2BgBHozsM2wKYvqAz4JhjV63CMsACkCyoxxwlFE2msBNeje6DL1jkj/20TeqQuXIqAE1SladSGgIqwZohIjzsJ/ABdbDKUIHAG6RCBdgaMWUIOu7MheEB2UDixbUgRUn6gQC9LXJ7VsUIPitS7ffB/py1XlstmSIrAVUDgLMgTYmI1oUxwGfB4tUQAxlewpAq8BT0Sg5tBm4PCS6wkmRfpLgbGG9cliTtXi6ghELqWrboaoLI9dRrWWaq5sSd2ASghFBpW/QRSvP8hGzVN8BFgZqeoxX2aNeLWKueUu9j8WgavbujpvX1laOhxVuz0j7Xm+6ckCCEq1CKgl1KbjfKBGRnVSVZFNtaFxY/MXoJY1tKTZNuo1NAudK00sIGmcMj0bPa24yM2Mxhe+mgNMawS3HgElmS9dGT2gALyi4F65duU2q4C7CgsqVbtlTb0e1deAXCoW+e8L7l286W7kzxIGaurH+Fa02NRrqer/R/3gK/cw/tUrIyBFjQ3X+5avaOBX4GMfofZ4HxamNqoMHsYq6sDKRGW1phwmySEgQDUda/wIxGSghrKy7+2J78wkcgkEW2punq3AQJO4Cd71bnMly4YElmZICuNZYiUgUA255vrZUJYR38C/4hOXSuYgmkysq0KiEQLBnspexfKH3AO8CtD8VK6mR73fv4fN3vVUpNWSYukS9FQTqTaqK1UIlGFbvldo1dQjnkNlRadWISCyiljvWEm0EgGR0I8mmooU5TpgV+pKW41AIKEEGfamH1QW1PLHViSgvSofaGakX3OeqfeYWpWA9nyrG7tvKYsErUygbO9nvm8nkHVMTVRqv4EmHm4WdJu/gX8AUZOmMeH+ThoAAAAASUVORK5CYII="
          />
        </span>
        <section
          id="movies"
          className="d-flex flex-wrap justify-content-evenly w-100 mt-2 mb-4"
        >
          {products.map((each) => (
            <a
              key={each._id}
              href="#"
              className="card m-2 anchor"
              style={{ width: "360px" }}
            >
              <img
                src={each.poster}
                style={{ height: "240px" }}
                className="card-img-top object-fit-cover"
                alt="nombre"
              />
              <h5 className="p-2 text-center card-title">{each.title}</h5>
            </a>
          ))}
          {products.length===0 &&             <a
              href="#"
              className="card m-2 anchor"
              style={{ width: "360px" }}
            >
              <img
                src="/error.webp"
                style={{ height: "240px" }}
                className="card-img-top object-fit-cover"
                alt="nombre"
              />
              <h5 className="p-2 text-center card-title">API IS NOT WORKING</h5>
            </a>}
        </section>
        <span className="w-100 d-flex justify-content-center">
          {prev && (
            <a
              className="btn btn-danger fs-5 m-4 mt-0"
              href="/?title={{filter}}&page={{prev}}"
            >
              PREV
            </a>
          )}
          {next && (
            <a
              className="btn btn-danger fs-5 m-4 mt-0"
              href="/?title={{filter}}&page={{next}}"
            >
              NEXT
            </a>
          )}
        </span>
      </main>
      <footer className="bg-danger w-100">
        <p className="text-light m-2 text-center fw-bolder fs-4">
          CODER CINEMA
        </p>
      </footer>
    </>
  );
}

export default App;
