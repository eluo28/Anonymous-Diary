import {MigrationInterface, QueryRunner} from "typeorm";

export class FakePosts1602208526600 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into post (title, text, "creatorId", public, "createdAt") values ('Jennifer 8', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, true, '2020-09-13T12:50:01Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Revenge of the Electric Car', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, true, '2019-12-01T16:31:49Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Texas Terror', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, true, '2019-12-13T01:09:18Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Berserk: The Golden Age Arc 2 - The Battle for Doldrey', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
        
        Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, false, '2020-03-08T09:24:51Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Beasts of the Southern Wild', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, false, '2020-02-25T02:44:32Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Temptress, The', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, true, '2020-07-02T21:46:29Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Peyton Place', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, true, '2019-11-28T19:04:04Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('The Halloween That Almost Wasn''t', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, false, '2020-08-08T21:33:25Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('American Crude', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
        
        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, true, '2019-11-27T05:12:12Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Unforgettable Summer, An (Un été inoubliable)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, false, '2020-01-29T04:19:19Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('I Love You, I Love You (Je t''aime je t''aime)', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, true, '2020-07-07T14:56:54Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('On Guard (Bossu, Le)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, false, '2019-12-09T15:21:32Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Pool Without Water, A (Mizu no nai puuru)', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, true, '2020-03-12T18:01:27Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Idle Mist (Vana Espuma)', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, true, '2020-05-15T04:40:23Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Cairo Station (a.k.a. Iron Gate, The) (Bab el hadid)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
        Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
        Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, true, '2020-04-26T08:58:00Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Pieces (Mil gritos tiene la noche) (One Thousand Cries Has the Night)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, false, '2020-08-22T01:39:59Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('No Distance Left to Run', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, true, '2019-12-04T15:39:07Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Marc Maron: Thinky Pain', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
        
        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
        
        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, false, '2020-09-08T14:25:06Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Henry V (Chronicle History of King Henry the Fift with His Battell Fought at Agincourt in France, The)', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, true, '2020-03-28T18:45:18Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('20 Seconds of Joy', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, false, '2020-03-09T02:55:22Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Al Franken: God Spoke', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, false, '2020-01-13T14:18:14Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Great Magician, The (Daai mo seut si)', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, false, '2020-05-21T11:24:38Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Ferryman, The', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, false, '2020-06-06T15:54:14Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Bloody Bloody Bible Camp', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
        
        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
        
        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, false, '2020-07-25T03:34:08Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Miracle Woman, The', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
        
        Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, true, '2020-07-02T17:25:41Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Death Wish 5: The Face of Death', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, true, '2020-03-28T23:30:37Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('It''s Pat', 'Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, false, '2020-03-18T18:19:09Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Tell Them Anything You Want: A Portrait of Maurice Sendak', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, false, '2019-12-25T13:40:47Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Gappa: The Triphibian Monsters (AKA Monster from a Prehistoric Planet) (Daikyojû Gappa)', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, false, '2019-11-25T00:12:17Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Peaceful Warrior', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, false, '2020-02-06T11:45:26Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('The Wayward Girl', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, false, '2019-12-10T23:33:30Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Thief Lord, The', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, false, '2020-02-26T15:17:00Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Guts (Agallas)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, true, '2020-03-05T12:09:03Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Apartment, The (Appartement, L'')', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, true, '2020-02-04T18:02:01Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Uncle Sam', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
        Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, true, '2020-07-24T15:47:13Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Eve and the Fire Horse', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
        Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, true, '2020-01-10T04:12:12Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('V. I. Warshawski', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, true, '2020-07-01T07:02:47Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Pretty One, The', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
        
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, true, '2019-12-16T21:34:33Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('A Cry in the Wild', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, false, '2019-12-31T13:32:28Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Vuonna 85', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, true, '2020-05-09T18:43:32Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Debtocracy', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
        
        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
        
        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, true, '2020-01-06T16:13:04Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Quicksand', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, false, '2019-12-23T06:00:01Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Dead Man on Campus', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.
        
        Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, false, '2020-07-09T11:05:09Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Djomeh', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, false, '2020-04-04T13:32:08Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('American: The Bill Hicks Story', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, true, '2020-01-31T09:42:20Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Fifty-Fifty (a.k.a. Schizo) (Shiza)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, true, '2020-03-21T04:46:35Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Joulupukki ja noitarumpu', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
        In congue. Etiam justo. Etiam pretium iaculis justo.', 1, false, '2020-04-30T06:06:48Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Letter for the King, The (Brief voor de koning, De)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, true, '2020-03-23T01:32:15Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Just Buried', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        
        Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, true, '2020-09-30T20:59:51Z');
        insert into post (title, text, "creatorId", public, "createdAt") values ('Blue Light, The (Blaue Licht, Das)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, true, '2020-10-01T14:08:29Z');
`)        

    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
