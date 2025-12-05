import type { JSX } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Paper, Typography, Alert, CircularProgress } from "@mui/material";

export default function Login(): JSX.Element {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { error } = useAppSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const resultAction = await dispatch(login({ username, password }));
        setIsLoading(false);

        if (login.fulfilled.match(resultAction)) {
            navigate("/");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
             <p className="text-sm text-center text-gray-500 m-4">
                    Подсказка: <span className="font-semibold text-gray-700">emilys, emilyspass</span>
                </p>
            <Paper elevation={3} className="p-8 w-full max-w-md dark:bg-gray-800 dark:text-white transition-colors duration-200">
                <Typography variant="h5" component="h1" className="mb-6 text-center font-bold text-gray-800 dark:text-white">
                    Sign In
                </Typography>

                {error && <Alert severity="error" className="mb-4">{error}</Alert>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="dark:bg-gray-700 rounded-md"
                        InputProps={{
                            className: "dark:text-white"
                        }}
                        InputLabelProps={{
                            className: "dark:text-gray-300"
                        }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="dark:bg-gray-700 rounded-md"
                        InputProps={{
                            className: "dark:text-white"
                        }}
                        InputLabelProps={{
                            className: "dark:text-gray-300"
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        disabled={isLoading}
                        className="mt-4 py-3"
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
                    </Button>
                </form>
            </Paper>
        </div>
    );
}
