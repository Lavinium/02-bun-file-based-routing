declare type FileSystemRouterOptions = ConstructorParameters<
  typeof Bun.FileSystemRouter
>[0];

declare type PageProps = Pick<MatchedRoute, "params" | "query">;

declare type Page = React.FC<PageProps>;
