import Button from "./Button";

export default function ConfirmDialog({

    open,

    title,

    message,

    onConfirm,

    onCancel,

}) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

            <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-700 p-8">

                <h2 className="text-2xl font-bold">

                    {title}

                </h2>

                <p className="mt-4 text-slate-400">

                    {message}

                </p>

                <div className="flex justify-end gap-4 mt-8">

                    <Button
                        type="button"
                        className="bg-slate-700"
                        onClick={onCancel}
                    >

                        Cancel

                    </Button>

                    <Button
                        type="button"
                        className="bg-red-600"
                        onClick={onConfirm}
                    >

                        Delete

                    </Button>

                </div>

            </div>

        </div>

    );

}