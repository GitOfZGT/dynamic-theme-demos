import { useState, useCallback, useEffect } from "react";
import "./App.less";
import { Button, Divider } from "antd";
// "@setCustomTheme" 在 /config/getDynamicThemePluginConfig.js定义的alias
import setCustomTheme from "@setCustomTheme";
import Color from "color";
import MenuCom from "./components/Menu";
import Forms from "./components/Forms";
import ReactColorPicker from "./components/ReactColorPicker";
function App() {
  const [state, setState] = useState({ primaryColor: { hex: "#512da7",r:"81",g:"45",b:"167",a:"1" } });
  const onChangeComplete = useCallback((color) => {
    console.log(color);
    setState({
      primaryColor: color,
    });
  }, []);

  useEffect(() => {
   
    setCustomTheme({
      Color,
      primaryColor: state.primaryColor.hex,
    });
  },[state.primaryColor.hex]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        webpack+react+antd 动态主题切换示例
      </h1>
      <div style={{ textAlign: "center" }}><span style={{verticalAlign:"middle"}}>当前主题色：</span><ReactColorPicker defaultColor={state.primaryColor} onChange={onChangeComplete}/></div>
      <h3 className="sub-title" style={{ marginBottom: "100px" }}>
        这行文字是非组件库的颜色切换演示，之下是组件库的颜色切换
      </h3>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Divider />
      <Forms />
      <Divider />
      <MenuCom />

      <div className="my-plugins">
        <h4>webpack版本插件支持</h4>
        <a
          rel="noopener noreferrer"
          href="https://github.com/GitOfZGT/some-loader-utils"
          target="_blank"
        >
          @zougt/some-loader-utils
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/GitOfZGT/theme-css-extract-webpack-plugin"
          target="_blank"
        >
          @zougt/theme-css-extract-webpack-plugin
        </a>
        <h4>vite版本插件支持</h4>
        <a
          rel="noopener noreferrer"
          href="https://github.com/GitOfZGT/vite-plugin-theme-preprocessor"
          target="_blank"
        >
          @zougt/vite-plugin-theme-preprocessor
        </a>
      </div>
    </div>
  );
}

export default App;
