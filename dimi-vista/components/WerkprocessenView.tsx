"use client";
import styles from "./WerkprocessenView.module.css";

const products = [
  {
    id: "K1W1",
    name: "Plant Werkzaamheden en bewaakt de voortgang",
    nameJp: "Planning of activities and monitoring of progress",
    price: "$129.99",
    tag: "K1-W1",
    aspect: "portrait",
    placeholderBg: "#141414",
  },
  {
    id: "K1W2",
    name: "Otwerpt software",
    nameJp: "Design software",
    price: "$89.99",
    tag: "K1-W2",
    aspect: "portrait",
    placeholderBg: "#141414",
  },
  {
    id: "K1W3",
    name: "Realiseert software",
    nameJp: "Realizes software",
    price: "$159.99",
    tag: "K1-W3",
    aspect: "portrait",
    placeholderBg: "#141414",
  },
  {
    id: "K1W4",
    name: "Test software",
    nameJp: "Testing of software",
    price: "$74.99",
    tag: "K1-W4",
    aspect: "portrait",
    placeholderBg: "#141414",
  },
  {
    id: "K1W5",
    name: "Doet verbetervoorstellen voor software",
    nameJp: "Makes suggestions for software improvement",
    price: "$74.99",
    tag: "K1-W5",
    aspect: "portrait",
    placeholderBg: "#141414",
  },
  {
    id: "K2W1",
    name: "Voert overleg",
    nameJp: "Conducts consultations",
    price: "$74.99",
    tag: "K2-W1",
    aspect: "portrait",
    placeholderBg: "#141414",
  },
  {
    id: "K2W2",
    name: "Persenteert het opgeleverde werk",
    nameJp: "Presents the completed work",
    price: "$74.99",
    tag: "K2-W2",
    aspect: "portrait",
    placeholderBg: "#141414",
  },
  {
    id: "K2W3",
    name: "Reflecteert op het werk",
    nameJp: "Reflects on the work",
    price: "$74.99",
    tag: "K2-W3",
    aspect: "portrait",
    placeholderBg: "#141414",
  },
];

interface WerkprocessenViewProps {
  onProductClick: (id: string) => void;
}

export default function StoreView({ onProductClick }: WerkprocessenViewProps) {
  return (
    <div className={styles.store}>
      <div className={styles.grid}>
        {products.map((product, i) => (
          <div
            key={product.id}
            className={`${styles.item} ${styles[`item${i + 1}`]}`}
            onClick={() => onProductClick(product.id)}
          >
            <div className={styles.imageWrap}>
              <div
                className={styles.placeholder}
                style={{
                  background: product.placeholderBg,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className={styles.crossH} />
                <div className={styles.crossV} />
                <span className={styles.placeholderLabel}>{product.tag}</span>
              </div>
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.itemInfo}>
              <span className={styles.itemName}>{product.name}</span>
              <span className={styles.itemJp}>[{product.nameJp}]</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
