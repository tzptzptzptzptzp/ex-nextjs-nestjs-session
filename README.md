# プロジェクトの概要

このレポジトリは、ウェブ開発の中核となる概念である認証、セッション、状態管理、及び状態に基づく UI の分岐を深く理解するための学習用リソースです。このプロジェクトは、理論的な学習だけでなく、実際の実装技術の探求を目的としています。

## 技術スタック

- **フロントエンド**: [Next.js](https://nextjs.org/)を使用し、サーバーサイドレンダリングや静的サイト生成のような最先端のフロントエンド技術を採用しています。
- **バックエンド**: [Nest.js](https://nestjs.com/)を使用し、TypeScript の利点を活かした堅牢なバックエンドアーキテクチャを構築しています。
- **データベース & 認証**: データベースには[Firebase](https://firebase.google.com/)のリアルタイムデータベースを利用しています。認証に関しては、Firebase の認証システムをあえて使わず、カスタムの認証フローを実装しています。
- **状態管理**: [Redux](https://redux.js.org/)を採用し、アプリケーション全体の状態を効率的に管理しています。ディレクトリ構成は Reducks パターンを採用しています。
- **セッション & トークン管理**: セッション管理には[JWT (JSON Web Tokens)](https://jwt.io/)を使用し、安全なトークンベースの認証メカニズムを提供しています。トークンはブラウザの Cookie に保存され、HTTP リクエスト時に自動的にサーバーへ送信されます。

## 特徴

- **カスタム認証フロー**: Firebase の認証システムを使用せず、バックエンド側でパスワードのハッシュ化やトークンの生成・検証を含む独自の認証プロセスを実装しています。これにより、認証システムの内部動作とセキュリティの概念を深く理解できます。
- **セキュアなセッション管理**: JWT を使用したセッション管理により、認証されたユーザーのセキュアなセッションを確立し、保護されたリソースへのアクセスを制御します。
- **状態管理の実践**: Redux を用いた状態管理を通じて、複雑なアプリケーションの状態を効率的に管理し、コンポーネント間での状態の共有を実現します。

## 学習目標

- Next.js と Nest.js を用いたモダンなフルスタック開発の基礎を学ぶ。
- カスタム認証システムの構築を通じて、パスワードの安全なハッシュ化、トークンベースの認証、セッション管理の実装方法を理解する。
- Redux による状態管理の原則と実践を学び、大規模アプリケーションでの使用方法を探求する。
- JWT を利用したセキュアなセッション管理のメカニズムを実装し、保護された

## 使用技術

フロントエンド

- [Next.js](https://nextjs.org/)
- [React](https://ja.react.dev/)
- [Redux](https://redux.js.org/) (Reducks パターンを採用)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [axios](https://axios-http.com/)
- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [Tailwindcss](https://tailwindcss.com/)

バックエンド

- [Nestjs](https://nestjs.com/)
- [Firebase](https://firebase.google.com/)
- [jwt](https://jwt.io/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [class-validator](https://github.com/typestack/class-validator)
- [cookie-parser](https://github.com/expressjs/cookie-parser)

## ディレクトリ構成

```
src/
 ├── app
 ├── components
 ├── config
 ├── hooks
 ├── provider
 ├── reducks
 ├── schema
 ├── utils

components/
 ├── atoms
 ├── form
 ├── molecules
 ├── organisms
 ├── templates

reducks/user/
 ├── dispatches.ts
 ├── initializes.ts
 ├── operations.ts
 ├── reducers.ts
 ├── selectors.ts
 ├── slice.ts
 ├── types.ts
```

## 開発手順

npm を使用しています

```bash
フロントエンド
npm
npm run dev // 開発用サーバー起動

バックエンド
npm
npm start // APIサーバー起動
```

---

<br>

# Project Overview

This repository is a learning resource designed to provide a deep understanding of core web development concepts such as authentication, session, state management, and UI branching based on state. The project aims not only at theoretical learning but also at exploring practical implementation techniques.

## Technology Stack

- **Frontend**: Uses [Next.js](https://nextjs.org/) to adopt cutting-edge frontend technologies such as server-side rendering and static site generation.
- **Backend**: Utilizes [Nest.js](https://nestjs.com/) to build a robust backend architecture leveraging the advantages of TypeScript.
- **Database & Authentication**: Employs Firebase's Realtime Database for the database and implements a custom authentication flow instead of using Firebase's authentication system.
- **State Management**: Adopts [Redux](https://redux.js.org/) for efficient management of the application's overall state. The directory structure follows the Reducks pattern.
- **Session & Token Management**: Uses [JWT (JSON Web Tokens)](https://jwt.io/) for session management, providing a secure token-based authentication mechanism. Tokens are stored in browser cookies and are automatically sent to the server during HTTP requests.

## Features

- **Custom Authentication Flow**: Implements a unique authentication process on the backend, including password hashing and token generation & validation, without using Firebase's authentication system. This allows for a deeper understanding of the inner workings of authentication systems and security concepts.
- **Secure Session Management**: Establishes secure sessions for authenticated users and controls access to protected resources through JWT-based session management.
- **Practical State Management**: Through the use of Redux for state management, efficiently manages complex application states and realizes state sharing between components.

## Learning Objectives

- Learn the basics of modern full-stack development using Next.js and Nest.js.
- Understand the implementation methods for password safe hashing, token-based authentication, and session management through the construction of a custom authentication system.
- Explore the principles and practices of state management with Redux, and investigate its use in large-scale applications.
- Implement secure session management mechanisms using JWT to control access to protected resources.

## Technologies Used

Frontend

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/) (Adopting the Reducks pattern)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [axios](https://axios-http.com/)
- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

Backend

- [Nest.js](https://nestjs.com/)
- [Firebase](https://firebase.google.com/)
- [jwt](https://jwt.io/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [class-validator](https://github.com/typestack/class-validator)
- [cookie-parser](https://github.com/expressjs/cookie-parser)

## Directory Structure

```

src/
├── app
├── components
├── config
├── hooks
├── provider
├── reducks
├── schema
├── utils

components/
├── atoms
├── form
├── molecules
├── organisms
├── templates

reducks/user/
├── dispatches.ts
├── initializes.ts
├── operations.ts
├── reducers.ts
├── selectors.ts
├── slice.ts
├── types.ts

```

## Development Steps

Using npm

```bash
Frontend
npm
npm run dev // Start the development server

Backend
npm
npm start // Start the API server
```
