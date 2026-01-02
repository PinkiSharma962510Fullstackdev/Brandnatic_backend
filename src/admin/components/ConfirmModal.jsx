 function ConfirmModal({ open, onConfirm, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded">
        <p className="mb-4">Are you sure?</p>
        <div className="flex gap-4">
          <button onClick={onConfirm} className="bg-red-600 px-4 py-2">Yes</button>
          <button onClick={onClose} className="bg-gray-600 px-4 py-2">No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;