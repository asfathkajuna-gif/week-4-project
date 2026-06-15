# SECURITY.md

## OWASP A03: Injection

This project uses Prisma ORM for database access. Prisma automatically parameterizes queries, which helps prevent SQL injection attacks. I verified that the application does not use unsafe database methods such as $queryRawUnsafe.

## OWASP A05: Security Misconfiguration

Security headers were added through the Next.js configuration. These headers help protect the application from clickjacking, content type sniffing, and information disclosure risks.

## Summary

By implementing authentication through Auth.js and applying OWASP security recommendations, the application provides stronger protection for user data and database access.