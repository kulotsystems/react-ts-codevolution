import { useState } from 'react';

type AuthUser = {
    name : string,
    email: string
};

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name : 'Arvic',
            email: 'email@example.com'
        });
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {user && (
                <div>
                    <div>User name is <code>{user.name}</code>.</div>
                    <div>User email is <code>{user.email}</code>.</div>
                </div>
            )}
        </div>
    );
};
