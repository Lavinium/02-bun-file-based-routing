// todo: add interactivity
export default (props: PageProps) => {
  return (
    <body>
      <h1 style={{ color: "red" }}>Blog Post</h1>
      <p>slug: {props.params.slug}</p>
    </body>
  );
};
