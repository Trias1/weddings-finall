import React, { useState } from "react";
import { Form, Alert, InputGroup, Button } from "react-bootstrap";
import BookDataService from "../../../../services/book-services";

export default function AddBooks({ id, setBookId, onNewComment }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Hadir");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      title,
      author,
      status,
    };

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "Berhasil mengirimkan ucapan!" });
      }

      // Panggil callback jika tersedia
      if (onNewComment) {
        onNewComment();
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };

  return (
    <>
      <div className="containerssa">
        <div className="ucapan text-center mt-3">
          {/* <h1 className="fw-bold">Ucapkan Sesuatu</h1> */}
          <h1 className="mt-2">Berikan Ucapan & Doa Restu</h1>
        </div>

        <div className="container mt-4">
          <div className="card-bodys">
            {message?.msg && (
              <Alert
                variant={message?.error ? "danger" : "success"}
                dismissible
                onClose={() => setMessage("")}
              >
                {message?.msg}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Nama anda..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ucapkan Selamat..."
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <div className="d-flex gap-3">
                  <Form.Check
                    type="radio"
                    label="Hadir"
                    name="status"
                    id="hadir"
                    checked={status === "Hadir"}
                    onChange={() => setStatus("Hadir")}
                  />
                  <Form.Check
                    type="radio"
                    label="Tidak Hadir"
                    name="status"
                    id="tidak-hadir"
                    checked={status === "Tidak Hadir"}
                    onChange={() => setStatus("Tidak Hadir")}
                  />
                </div>
              </Form.Group>

              <div className="d-grid">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-kirim-undangan"
                >
                  Kirim Ucapan
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
