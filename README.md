# Setup

NOTE --> Add your secretkey in " projectBackend > settings.py > SECRET_KEY = 'your secret key' "

1. Creat a virtual enviornment and activate it.
2. Then run command "pip install -r requirements.txt" and cd to frontend and run "npm install".
3. Create a super user by running in terminal "py manage.py createsuperuser".
4. To run in dev mode open two terminal windows.

   # 4.1

   In the fist terminal window run command "py manage.py runserver".
   Then open your browser to http://127.0.0.1:8000/admin and enter your admin username and password.
   Here create a new dummy user for testing.

   # 4.2

   In the second terminal window cd to frontend and run command "npm run dev".

5. Manully enter url http://127.0.0.1:8000/login for login page. And enter dummy credentials of user
   you created earlier and login.

(step: running in build mode)

6. For build purpose instead of step 4.2 after cd to frontend and run "npm run build".
   After that only run "py manage.py runserver" to run the app.
