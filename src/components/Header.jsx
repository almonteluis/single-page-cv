export default function Header() {
  return (
    <header>
      <hr />
      <h1>Jorge Luis Almonte</h1>
      <p className="section-header">Senior Frontend Engineer</p>
      <address>
        <p>
          <span className="street">23 Jump Street</span>
          <br />
          <span className="city">Your City, ST 12345</span>
        </p>
        <p>
          <a href="tel:+11234561234">(123) 456-1234</a>
          <br />
          <a href="mailto:almonteluis92@example.com">
            almonteluis92@example.com
          </a>
        </p>
      </address>
    </header>
  );
}
