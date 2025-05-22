here i have two front end and backend go inside each folder run (npm i) to install then ru npm run dev in both of them to run the code


api are 

router.post("/addTransaction", AddTranaction);
router.get("/getTransactions", getTransactions);
router.post("/editTrans", editTrans);
router.get("/deleteTrans", deleteTrans);


frontend routes are

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />}>
                    <Route path="home" element={<Home />} />
                    <Route path="add" element={<Create />} />
                    <Route path="delete" element={<Deleteme />} />
                    <Route path="edit" element={<Edit />} />
                    <Route path="all" element={<All />} />
                    <Route path="total" element={<Total />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);