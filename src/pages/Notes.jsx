import { notesAPI } from "../services/notesApi";
import { useState, useEffect } from "react";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const [dataForm, setDataForm] = useState({
        title: "",
        content: "",
        status: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            setSuccess("");

            if (isEditing) {
                await notesAPI.updateNote(editId, dataForm);
                setSuccess("Catatan berhasil diperbarui!");
            } else {
                await notesAPI.createNote(dataForm);
                setSuccess("Catatan berhasil ditambahkan!");
            }

            setDataForm({ title: "", content: "", status: "" });
            setIsEditing(false);
            setEditId(null);

            setTimeout(() => setSuccess(""), 3000);
            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (note) => {
        setIsEditing(true);
        setEditId(note.id);
        setDataForm({
            title: note.title,
            content: note.content,
            status: note.status || "",
        });
    };

    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
        if (!konfirmasi) return;

        try {
            setLoading(true);
            setError("");
            setSuccess("");

            await notesAPI.deleteNote(id);
            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await notesAPI.fetchNotes();
            setNotes(data);
        } catch (err) {
            setError("Gagal memuat catatan");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Notes App
                </h2>
            </div>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {isEditing ? "Edit Catatan" : "Tambah Catatan Baru"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={dataForm.title}
                        placeholder="Judul catatan"
                        onChange={handleChange}
                        disabled={loading}
                        required
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200"
                    />

                    <textarea
                        name="content"
                        value={dataForm.content}
                        placeholder="Isi catatan"
                        onChange={handleChange}
                        disabled={loading}
                        required
                        rows="2"
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200 resize-none"
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
                        rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                        focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-200 shadow-lg"
                    >
                        {loading
                            ? "Mohon Tunggu..."
                            : isEditing
                                ? "Simpan Perubahan"
                                : "Tambah Catatan"}
                    </button>
                </form>
            </div>

            {/* Notes Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
                <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold">
                        Daftar Catatan ({notes.length})
                    </h3>
                </div>

                {notes.length === 0 ? (
                    <EmptyState message="Belum ada catatan." />
                ) : (
                    <GenericTable
                        columns={["#", "Judul", "Isi Catatan", "Aksi"]}
                        data={notes}
                        renderRow={(note, index) => (
                            <>
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{note.title}</td>
                                <td className="px-6 py-4">{note.content}</td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-2 text-sm text-gray-600">
                                        <button
                                            onClick={() => handleEdit(note)}
                                            disabled={loading}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(note.id)}
                                            disabled={loading}
                                            className="text-red-600 hover:underline"
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                </td>
                            </>
                        )}
                    />
                )}
            </div>
        </div>
    );
}
