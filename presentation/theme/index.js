import createTheme from "../../createTheme";

const colors = {
  primary: "#0f0e21", // Background
  secondary: "#8d1fb1", // Font color
  tertiary: "#c3c2c7", // ?
  quaternary: "#2d24cf" // Widgets
};

const theme = createTheme(
  colors,
  {
    primary: "Arial, sans-serif",
    secondary: "Helvetica"
  },
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: "4rem",
          color: colors.secondary,
          fontWeight: "bold",
          // textTransform: "uppercase"
        },
        h2: {
          fontSize: "3rem",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginTop: "1rem",
          // textTransform: "uppercase"
        },
        h3: {
          fontSize: "2.5rem",
          textAlign: "center",
          color: colors.quaternary,
          textTransform: "uppercase"
        },
        h4: {
          fontSize: "1.5rem",
          color: "white",
          textAlign: "center",
          textTransform: "uppercase"
        },
        h5: {
          fontSize: "1rem",
          textAlign: "center",
          textTransform: "uppercase"
        },
        h6: {
          fontSize: "0.5rem",
          textAlign: "center",
          textTransform: "uppercase"
        }
      },
      listItem: {
        listStylePosition: "outside",
        color: "white",
        lineHeight: "1.4em",
        fontSize: "1.7rem",
        textAlign: "left",
        marginTop: "0.5rem",
        marginBottom: "0.5rem"
      },
      text: {
        color: "white",
        textAlign: "center"
      },
      codePane: {
        fontSize: "2rem"
      },
      blockquote: {
        fontSize: "0.8em"
      } 
    }
  }
);

export default theme;
