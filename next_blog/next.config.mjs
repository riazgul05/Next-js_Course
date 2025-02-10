/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export"
    redirects: async () => {
        return [
            {
                source: '/redirection',
                destination: '/',
                permanent: false
            },
            {
                source: '/users',
                destination: '/',
                permanent: false
            },
            {
                source: '/user/:userid',
                destination: '/',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
