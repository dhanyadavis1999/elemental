import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

  const newClickFun = (e) => {
    navigate("/dash")
  };
<button
            onClick={(e) => {
              newClickFun(e);
            }}
          >
            Log In
          </button>