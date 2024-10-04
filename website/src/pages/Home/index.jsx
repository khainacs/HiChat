import Chat from "./components/Chat";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center w-full">
                <Chat/>
            </div>
        </main>
    );
}