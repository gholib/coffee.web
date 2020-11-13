export default {
    isAuthenticated: false,
    error: false,
    token: localStorage.getItem('user-token') || null,
    user: localStorage.getItem('user-profile') || null,
    permissions: localStorage.getItem('user-permissions') || null,
    process: false,
    permissionsLoaded: false
}
