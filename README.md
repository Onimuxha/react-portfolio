# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Environment Variables

This project requires a `.env` file in the root directory to store sensitive configuration such as your Telegram Bot Token and Chat ID.  
**Do not commit your `.env` file to version control**—it is already included in `.gitignore` for security.

### Required Variables

Add the following to your `.env` file:

```
VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
VITE_TELEGRAM_CHAT_ID=your_telegram_chat_id
```

Replace the values with your actual Telegram bot token and chat ID.

> **Note:**  
> After editing your `.env` file, restart the development server to apply changes.
