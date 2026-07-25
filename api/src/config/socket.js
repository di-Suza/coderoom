import { EnvConfig } from "./env.js";

class SocketConfig {
  static getOptions() {
    return {
      cors: {
        origin: "https://coderoomcollab.vercel.app",
        credentials: true,
      },
    };
  }
}

export { SocketConfig };
export default SocketConfig;
