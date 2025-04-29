import BasicMenu from "../BasicMenu"

export default function Header() {
    return (
        <header>
            <h1 style={{ position: "absolute", top: 10, left: 20, fontSize: "24px" }}>WebAnalise</h1>
            <nav
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    top: 20,
                    right: 20
                }}
            >
            <BasicMenu />
            </nav>
        </header>
    )
}