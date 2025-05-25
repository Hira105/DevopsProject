FROM python:3.9

WORKDIR /app
COPY . .
RUN pip install -r requirements.txt

# Add Chrome dependencies
RUN apt-get update && apt-get install -y \
    wget unzip xvfb libxi6 libgconf-2-4 \
    libnss3 libxss1 libappindicator1 libindicator7 \
    libasound2 fonts-liberation libappindicator3-1 xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Install Chrome
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg -i google-chrome*.deb; apt-get -fy install

# Install ChromeDriver
RUN LATEST=$(curl -sSL https://chromedriver.storage.googleapis.com/LATEST_RELEASE) && \
    wget -q https://chromedriver.storage.googleapis.com/$LATEST/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip && \
    mv chromedriver /usr/local/bin/ && chmod +x /usr/local/bin/chromedriver

CMD ["python", "test_homepage.py"]
