import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="w-full min-h-screen flex items-center justify-center">
            <div className="text-3xl text-center gap-y-10">
                <h1 className="text-5xl font-bold">Oops!</h1>
                <p className="py-16">Sorry, an unexpected error has occurred.</p>
                <p className="text-red-400">
                    <i>{error.statusText || error.message} this page</i>
                </p>
            </div>
        </div>
    );
}