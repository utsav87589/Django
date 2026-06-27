
"""
Application Execution Entry Point.

This script instantiates the configured Flask application factory 
and launches the local WSGI development server.
"""

from app import create_app, db
from app.models import Task

# Instantiate the application object using our factory configuration
app = create_app()

# Redundant Database Safety Guard
# Ensuring tables exist on startup if run.py is executed directly.
# Note: create_app() already runs this, so this block could safely be removed later.
with app.app_context(): 
    db.create_all()


# Standard Python safeguard ensuring the server only fires up if this specific file
# is executed directly from the terminal (e.g., `python run.py`), rather than being imported.
if __name__ == '__main__':
    # Launches the local developer server.
    # debug=True enables hot-reloading (server restarts automatically when code changes)
    # and provides an interactive debugger in the browser console for easy troubleshooting.
    app.run(debug=True)