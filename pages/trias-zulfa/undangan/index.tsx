import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/organisms/Navbar";
import MainBanner from "../../components/organisms/mainBanner";
import CalonPasangan from "../../components/organisms/calonPasangan";
import WeedingLocation from "../../components/organisms/WeedingLocation";
import Maps from "../../components/organisms/Maps";
import Footer from "../../components/organisms/Footer";
import AddBook from "../../components/organisms/Comments/AddBook";
import BooksList from "../../components/organisms/Comments/BookList";
import LoveStory from "../../components/organisms/lovestory";
import AdabWalimah from "../../components/organisms/walimah";
import Amplop from "../../components/organisms/amplop";
import { useRouter } from "next/router";

export default function Undangan() {
  const router = useRouter(); // Ambil nama tamu dari query string
  const [bookId, setBookId] = useState("");
  const { name } = router.query;
  const [onNewComment] = useState("");

  return (
    <>
      {/* Audio untuk suara latar */}
      <audio autoPlay loop>
        <source
          src="/audio/WeddingNasheedMuhammadAlMuqitLyricsArabic.mp3"
          type="audio/mp3"
        />
        Browser Anda tidak mendukung elemen audio.
      </audio>

      {/* Navbar */}
      <Navbar />
      {/* Main Banner */}
      <MainBanner />
      {/* Tampilkan nama tamu jika ada */}
      {name && (
        <div className="text-center mt-3">
          <h2>Halo, {decodeURIComponent(name as string)}!</h2>
        </div>
      )}
      {/* Komponen lainnya */}
      <CalonPasangan />
      <LoveStory />
      <WeedingLocation />
      <Container>
        <Row>
          <Col>
            <AddBook
              id={bookId}
              setBookId={setBookId}
              onNewComment={onNewComment}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList />
          </Col>
        </Row>
      </Container>
      <AdabWalimah />
      <Amplop />
      <Footer />
    </>
  );
}