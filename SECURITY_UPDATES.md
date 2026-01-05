# Security Updates - CVE Patches

## Critical Vulnerabilities Fixed

### CVE-2025-55182 (React2Shell) and CVE-2025-66478
- **CVSS Score:** 10.0 (Critical)
- **Type:** Remote Code Execution (RCE) via React Server Components
- **Affected Versions:**
  - React: 19.0.0, 19.1.0, 19.1.1, 19.2.0
  - Next.js: 15.x, 16.x (unpatched versions)

## Updated Dependencies

### React
- **Previous:** 19.2.3 (vulnerable)
- **Updated to:** ^19.2.1 (patched)
- **CVE Status:** ✅ Patched

### React DOM
- **Previous:** 19.2.3 (vulnerable)
- **Updated to:** ^19.2.1 (patched)
- **CVE Status:** ✅ Patched

### Next.js
- **Previous:** 19.2.3 (non-existent version causing build failures)
- **Updated to:** ^16.0.7 (latest patched version)
- **CVE Status:** ✅ Patched

### ESLint Config Next
- **Updated to:** ^16.0.7 (aligned with Next.js version)

## Action Required

1. **Install Updated Dependencies:**
   ```bash
   rm -f package-lock.json
   npm install
   ```

2. **Rotate Secrets (if application was online before patching):**
   - If your application was online and unpatched as of December 4, 2025, rotate all secrets
   - Start with the most critical secrets first

3. **Rebuild Docker Container:**
   ```bash
   docker-compose build --no-cache
   docker-compose up
   ```

## References

- [Next.js CVE-2025-66478 Advisory](https://nextjs.org/blog/CVE-2025-66478)
- [React Security Updates](https://react.dev/blog)

