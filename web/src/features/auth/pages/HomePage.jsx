import React from "react";
import logo from "../../../shared/assets/images/logo.png";
import AuthService from "../services/auth.service.js";

const HomePage = () => {
  const googleAuthhandler = () => {
    window.location.href = AuthService.googleAuthUrl();
  };

  const languages = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "C/C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Ruby",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    },
  ];

  const codeLines = [
    "const patch = createPatchFromChange(previous, next);",
    "socket.emit('document:patch', { roomCode, patch });",
    "server.applyPatch(roomCode, patch);",
    "io.to(roomCode).emit('document:patch:applied');",
  ];

  const conflictSteps = [
    "Versioned patch history",
    "Server-side position shifting",
    "Visible conflict markers",
  ];

  return (
    <div
      className="min-h-screen w-full text-white font-sans selection:bg-zinc-700"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/0c/5a/99/0c5a990ae7e9489192d6f7abf916ae19.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen w-full bg-black/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="CodeRoom" className="h-9 w-auto" />
          </div>

          <button
            onClick={googleAuthhandler}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
          >
            Get started
          </button>
        </nav>

        <section className="flex flex-col items-center px-4 pb-10 pt-20 text-center">
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
            The next-gen code <br /> editor is here
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Create coding rooms, invite teammates, and collaborate on one shared
            document with realtime syncing, presence, and MongoDB persistence.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={googleAuthhandler}
              className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-all hover:bg-zinc-200"
            >
              Get started
            </button>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="group relative">
            <div className="overflow-hidden rounded-xl border border-zinc-800 shadow-2xl shadow-zinc-900">
              <img
                src="https://ik.imagekit.io/7tiz96d91/e55b4386c9e4c6c9b513a809b407348b.jpg?updatedAt=1782777565412"
                alt="CodeRoom editor interface"
                className="h-auto w-full"
              />
            </div>

            <div className="absolute -right-6 -top-6 rounded-lg border border-zinc-700 bg-zinc-900 p-3 shadow-xl">
              <span className="font-mono text-xs text-green-400">
                Live sync enabled
              </span>
            </div>
            <div className="absolute -left-10 top-1/3 rounded-lg border border-zinc-700 bg-zinc-900 p-3 shadow-xl">
              <span className="font-mono text-xs text-blue-400">
                MongoDB persistence
              </span>
            </div>
            <div className="absolute -right-10 bottom-10 rounded-lg border border-zinc-700 bg-zinc-900 p-3 shadow-xl">
              <span className="font-mono text-xs text-purple-400">
                Room presence
              </span>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <p className="mb-8 font-semibold text-zinc-500">
            Works with popular languages
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3"
              >
                <img src={lang.icon} alt={lang.name} className="h-8 w-8" />
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Features
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
                CodeRoom focuses on the features required for collaborative
                coding: shared rooms, patch-based sync, conflict handling,
                persistence, and realtime presence.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[240px]">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-600 md:row-span-2">
                <div className="absolute right-4 top-4 flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="mt-4 space-y-1 font-mono text-[10px] md:text-xs">
                  {codeLines.map((line) => (
                    <p key={line} className="text-zinc-400">
                      {line}
                    </p>
                  ))}

                  <div className="mt-4 inline-block rounded border border-zinc-700 bg-zinc-800/50 p-2 text-zinc-300">
                    Patch synced to room participants
                  </div>
                </div>
                <div className="absolute bottom-8 left-6 right-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    Delta-based editing
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Editor changes are converted into lightweight patches so
                    users do not resend the full document on every update.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-600">
                <h3 className="mb-4 text-2xl font-semibold leading-tight">
                  Secure room <br /> collaboration
                </h3>
                <p className="text-sm leading-6 text-zinc-400">
                  Create password-protected rooms, share invite links, and keep
                  document updates scoped to the active room.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-600">
                <div className="space-y-3">
                  {conflictSteps.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-black/30 p-2 text-xs text-zinc-300"
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${
                          index === 0
                            ? "bg-green-500"
                            : index === 1
                              ? "bg-blue-500"
                              : "bg-amber-500"
                        }`}
                      ></div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="rounded bg-zinc-800 px-3 py-1 text-[10px] text-zinc-400">
                    No CRDT/OT dependency
                  </div>
                  <div className="rounded bg-zinc-800 px-3 py-1 text-[10px] text-zinc-400">
                    Server authoritative
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-600">
                <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-700 bg-black p-2">
                  <span className="text-xs text-zinc-500">DB</span>
                  <span className="text-xs text-zinc-400">MongoDB snapshot</span>
                  <span className="ml-auto text-[10px] text-zinc-600">saved</span>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    Persistent sessions
                  </h3>
                  <p className="text-sm leading-6 text-zinc-400">
                    Room content, versions, line authors, and conflict markers
                    survive reloads and reconnects.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-600">
                <div className="mb-4 flex -space-x-3 justify-center">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-zinc-700 text-xs font-bold"
                    >
                      U{item}
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="mb-2 text-center text-2xl font-semibold">
                    Live presence
                  </h3>
                  <p className="text-center text-sm leading-6 text-zinc-400">
                    See active participants, typing status, and room-level
                    updates in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
