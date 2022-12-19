import { useEffect, useState } from 'react';

type AuthUser = {
    name : string,
    email: string
};

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name : 'Arvic',
            email: 'email@example.com'
        });
    };

    useEffect(() => {
        handleLogin();
    }, []);

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is <code>{user.name}</code>.</div>
            <div>User email is <code>{user.email}</code>.</div>
        </div>
    );
};
