function Copyright() {
  return (
    <div>
      <h2>Copyright and License</h2>
      <p>&copy; {new Date().getFullYear()} Oskar Mansfeld</p>
      {/* rel="noopener noreferrer" mitigates the security risks associated with target="_blank" */}
      <p>
        The source-code for this website is licensed under the{" "}
        <a
          href="https://opensource.org/license/mit"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT License
        </a>
      </p>
    </div>
  );
};

export default Copyright;
