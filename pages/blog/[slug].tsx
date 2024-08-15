// todo: add interactivity
export default (props: PageProps) => {
  return (
    <body>
      <h1 style={{ color: "blue" }}>Blog Post</h1>
      <p>{props.params.slug}</p>
    </body>
  );
};
