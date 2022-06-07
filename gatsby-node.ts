import type { Actions } from "gatsby";

export const onCreateWebpackConfig = ({ actions }: { actions: Actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        // fs: false,
      },
    },
  });
};
