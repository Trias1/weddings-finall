import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { FaBookOpen } from "react-icons/fa";
import undanganData from "../../undangan.json";

export default function UndanganUserPage() {
  const router = useRouter();
  const { id: rawId } = router.query; 
  const [isModalVisible, setIsModalVisible] = useState(true);

  let id = Array.isArray(rawId) ? rawId[0] : rawId;

  if (!id || typeof id !== "string") return <p>Loading...</p>;

  const userData = undanganData.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!userData) {
    return (
      <div className="text-center mt-5">
        <h1>Undangan Tidak Ditemukan</h1>
        <p>
          Silakan periksa URL atau hubungi admin untuk informasi lebih lanjut.
        </p>
      </div>
    );
  }

  return (
    <>
      {isModalVisible && (
        <div
          className="modal fade show"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="false"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="d-flex flex-column">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <div className="modal-body text-center">
                    <div className="img-undangan">
                      <Image
                        src="/img/s.jpg"
                        className="rounded-circle"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="Foto Pengantin"
                      />
                    </div>
                    <p className="nameUndangan fw-bold fs-3 text-white mt-3 mb-3">
                      {userData.name}
                    </p>
                    <p className="desc1 fw-bold text-lg text-white mb-3">
                      {userData.description}
                    </p>
                    <div className="descButton d-flex justify-content-center align-items-center rounded-pill px-1 position-relative mx-sm-1 mx-md-5 mx-lg-5 mx-xl-5 mx-xxl-5">
                      <FaBookOpen />
                      <button
                        type="button"
                        className="btn btn-undangan fw-bold px-1"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          setIsModalVisible(false); // Sembunyikan modal
                          router.push(`/trias-zulfa/undangan`); // Redirect dengan template string
                        }}
                      >
                        Buka Undangan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Script Bootstrap */}
      <Script src="/sc.js" />
    </>
  );
}