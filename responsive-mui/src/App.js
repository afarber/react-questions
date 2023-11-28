import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {
  return (
    <div>
      <Button variant="text" startIcon={<SettingsIcon />}>
        Text
      </Button>
      <Button variant="contained" startIcon={<SettingsIcon />}>
        Contained
      </Button>
      <Button variant="outlined" startIcon={<SettingsIcon />}>
        Outlined
      </Button>
    </div>
  );
}

export default App;
